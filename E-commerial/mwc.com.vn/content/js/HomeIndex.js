var viewModel = new function () {
    var self = this;

    self.ItemId = ko.observable(0);
    self.HostThumnailUrl = ko.observable(data.HostThumnail);
    self.PostItems = ko.observableArray([]);

    // Paginate
    self.SortBy = ko.observable('CREATEDATE');
    self.OrderBy = ko.observable('DESC');
    self.PageIndex = ko.observable(0);
    self.PageSize = ko.observable(10);
    self.TotalPages = ko.observable(0);
    self.TotalCount = ko.observable(0);    

    // Filter Data
    function FilterData() {
        openProcess();
        var dataPost = {            
            "sortBy": viewModel.SortBy(),
            "orderBy": viewModel.OrderBy(),
            "pageIndex": viewModel.PageIndex(),
            "pageSize": viewModel.PageSize()
        };

        $.ajax({
            type: "POST",
            url: "/Home/GetListPost",
            data: dataPost,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {                
                // Set values
                viewModel.TotalCount(data.TotalCount);
                viewModel.TotalPages(data.TotalPages);
                $.each(data.PostItems, function () {                         
                    self.PostItems.push(new AddItems(this.KeySlug, this.Name, this.Picture, this.Description));
                });                
            },
            error: function (xhr, status, error) {                                
            }
        });
    }
    // Search
    self.LoadMore = function () {
        var pageIndex = self.PageIndex();
        var totalPage = self.TotalPages();
        if (pageIndex < totalPage) {
            self.PageIndex(pageIndex + 1);
            FilterData();
        }            
        else {
            alert('Không còn tin cũ hơn');
        }
        
    };
    self.LoadFirst= function() {
        self.PageIndex(1);
        FilterData();
    }
}

ko.applyBindings(viewModel, document.getElementById("post-timeline"));
//// Onload
// jQuery
$(document).ready(function () {
    // First Load
    viewModel.LoadFirst();
});

function AddItems(slug,name, image,descrption) {
    var self = this;
    self.KeySlug = ko.observable(slug);
    self.Name = ko.observable(name);
    self.Picture = ko.observable(image);
    self.Description = ko.observable(descrption);
}