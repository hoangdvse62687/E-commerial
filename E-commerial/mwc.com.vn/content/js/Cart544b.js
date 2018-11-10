var validatePronvice = function (id) {
    var validated = true;

    if (id !== undefined && id != null && id !== "") {
        if (id === '0')
            validated= false;        
    }

    return validated;
};

var viewModel = new function () {
    var self = this;
    // Thông tin chung
    self.HostThumnail = ko.observable(data.HostThumnail);
    self.CartItems = ko.observableArray(data.CartItems != null ? data.CartItems : []);
    self.FeePrice = ko.observable(0);
    // ProvinceId
    self.ProvinceId = ko.observable('0').extend({
        validation: {
            validator: function (val) {
                return validatePronvice(val);
            },
            message: "Vui lòng chọn Tỉnh/Thành",
            params: self.ProvinceId
        }
    });
    self.ProvinceOptions = ko.observableArray(data.ProvinceOptions != null ? data.ProvinceOptions : []);
    

    // DistrictId
    self.DistrictId = ko.observable('0');
    self.DistrictOptions = ko.observableArray(data.DistrictOptions != null ? data.DistrictOptions : []);

    self.TotalPrice = ko.observable(data.TotalPrice);

    self.FullName = ko.observable('')
                    .extend({ required: { message: "Vui lòng nhập họ tên" } });

    self.Email = ko.observable('').extend({ required: { message: "Vui lòng nhập email" } }).extend({
        pattern: {
            message: 'Email không hợp lệ',
            params: EMAILADDRESS_EXPRESSION
        }
    });
    self.Phone = ko.observable('').extend({ required: { message: "Vui lòng nhập điện thoại" } });
    self.Address = ko.observable('').extend({ required: { message: "Vui lòng nhập địa chỉ" } });
    self.Notes = ko.observable('');

    self.UpdateCart = function (item) {        
        var dataPost = {
            "productId": item.ProductId,
            "color": item.Color,
            "size": item.Size,
            "qty": item.Qty,
            "provinceCode": self.ProvinceId(),
            "districtCode": self.DistrictId()
        };

        $.ajax({
            async: true,
            type: "POST",
            url: "/Cart/UpdateCartToAjax",
            data: dataPost,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                              
                self.CartItems(data.CartItems == null ? [] : data.CartItems);
                self.TotalPrice(data.TotalPrice);
                self.FeePrice(data.PriceShippingFee);
            },
            error: function (xhr, status, error) {
                alert('System error');
            }
        });
    }

    self.RemoveCartItem = function (item) {
        var dataPost = {
            "productId": item.ProductId,
            "color": item.Color,
            "size": item.Size
        };

        $.ajax({
            type: "POST",
            url: "/Cart/RemoveCartToAjax",
            data: dataPost,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.CartItems.length === 0)
                    window.location.reload();
                self.CartItems(data.CartItems == null ? [] : data.CartItems);
                self.TotalPrice(data.TotalPrice);

            },
            error: function (xhr, status, error) {
                alert('System error');
            }
        });
    }

    self.ProvinceId.subscribe(function (val) {
        openProcess();
        var dataPost = {
            "provinceCode": val
        };
        $.ajax({
            async: false,
            type: "POST",
            url: "/Cart/GetDistrict",
            data: dataPost,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                hideProcess();
                self.DistrictOptions(data.DistrictOptions);
            },
            error: function (xhr, status, error) {
                hideProcess();
                showPopupError();
            }
        });
    });

    self.DistrictId.subscribe(function (val) {
        openProcess();
        var totalProduct = 0;
        $.each(self.CartItems(), function () {
            totalProduct += this.Qty;
        });
        var dataPost = {
            "provinceCode": self.ProvinceId(),
            "districtCode": val,
            "total": totalProduct,
            "totalPrice": self.TotalPrice()
        };
        $.ajax({
            async: false,
            type: "POST",
            url: "/Cart/CaculateShippingFee",
            data: dataPost,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                hideProcess();
                self.FeePrice(data);
            },
            error: function (xhr, status, error) {
                hideProcess();
                showPopupError();
            }
        });
    });

   

    // Submit
    self.Submit = function () {        
        if (viewModel.errors().length === 0) {
            $('#frmAdd').submit();
        }
        else {
            viewModel.errors.showAllMessages();
        }
    }
};

viewModel.errors = ko.validation.group(viewModel);
ko.validation.rules.pattern.message = 'Invalid.';
ko.applyBindings(viewModel, document.getElementById("content"));