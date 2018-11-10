$(document).ready(function ($) {
    awe_backtotop();
    //sticky();
    $("#menu-toggle, .body_overlay").click(function (e) {
        e.preventDefault();
        var $show_menu = $('#menu_xs, .body_overlay, body, #menu-toggle');
        $show_menu.toggleClass("toggled");
        $('.side_nav').toggleClass('open_sidebar_menu');
    });
    //$("#header").sticky({ topSpacing: 0 });
    //menu    
    $('#primary-menu > ul').superfish();

    $(".onClicktoggle").click(function () {
        $(".subnav").slideToggle();
        $(this).toggleClass("actmenu");
        $("body").toggleClass("watch_menu");
        $('.bottomMenu').toggleClass("fixHeight");
        $(".over-mid").slideToggle()
    });
    $(".over-mid").click(function () {
        $("nav").slideToggle();
        $(".actmenu").removeClass("actmenu");
        $("body").toggleClass("watch_menu");
        $('.bottomMenu').toggleClass("fixHeight");
        $(this).slideToggle()
    });
    $(".onClicktoggleup").click(function () {
        $("nav").slideToggle();
        $(".actmenu").removeClass("actmenu");
        $("body").toggleClass("watch_menu");
        $('.bottomMenu').toggleClass("fixHeight");
        $(".over-mid").slideToggle()
    });

    $('#slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false,
                    arrows: true
                }
            }
        ]
    });

    $("#owl-blog-slider").owlCarousel({
        nav: false,
        slideSpeed: 600,
        paginationSpeed: 400,
        singleItem: false,
        pagination: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: false,
        autoHeight: false,
        loop: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [967, 1],
        itemsTablet: [600, 1],
        touchDrag: false,
        //mouseDrag: false,
    });


    $('.widget_links li i').click(function() {
        $(this).next().toggle();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 35) {
            $('#header').addClass('sticky-header');
            $('body').addClass('sticky-header');
        } else {
            $('#header').removeClass('sticky-header');
            $('body').removeClass('sticky-header');
        }
    });

    //post list
    $('.blog_carousel .slider-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        asNavFor: '.blog_carousel_thumb',
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    asNavFor: null
                }
            }
        ]
    })
                        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
                            $('.blog_carousel_thumb .thumb_cover').removeClass('slick-current');
                            $('.blog_carousel_thumb .thumb_cover[data-slick-index="' + currentSlide + '"]').addClass('slick-current');
                        });

    $('.blog_carousel_thumb').slick({
        centerMode: true,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        asNavFor: '.blog_carousel .slider-wrapper',
        focusOnSelect: true
    });

    $('#cart-sidebars .cart_btn-close').click(function () {
        $("#cart-sidebars").removeClass('active');
        $(".backdrop__body-backdrop___1rvky").removeClass('active');
    });
    //$('#top-cart-trigger').click(function () {
    //    //$("#cart-sidebars").addClass('active');
    //    //$(".backdrop__body-backdrop___1rvky").addClass('active');
    //});
    $('.backdrop__body-backdrop___1rvky').click(function () {
        $("#cart-sidebars").removeClass('active');
        $(".backdrop__body-backdrop___1rvky").removeClass('active');
    });

    $('.pd_slide').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        asNavFor: '.pd_slide_thumb',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
                    asNavFor: null
                }
            }
        ]
    });
                    //.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    //    $('.pd_slide_thumb .slick-slide').removeClass('slick-current');
                    //    $('.pd_slide_thumb .slick-slide[data-slick-index="' + currentSlide + '"]').addClass('slick-current');
                    //});
    $('.pd_slide_thumb').slick({        
        slidesToShow: 5,
        arrows: false,
        asNavFor: '.pd_slide',
        focusOnSelect: true,
        vertical: false,
        
    });

    //Size change
    $('ul.size_picker li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    //Color change
    $('ul.inline li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    //close alert add to card
    $('.close-alert').click(function () {
        $('#alert-addtocard').hide();
    });

    //Menu mboile
    $('.navbar-toggle,.navbar-brand').click(function () {
        $('.navbar_collapse').toggle('slow');
    });
    $('.mn-top-arrow').click(function() {
        $('.top-links-after').toggle();
    });

});

function awe_backtotop() {
    if ($('#gotoTop').length) {
        var scrollTrigger = 100,
			backToTop = function () {
			    var scrollTop = $(window).scrollTop();
			    if (scrollTop > scrollTrigger) {
			        $('#gotoTop').show();
			    } else {
			        $('#gotoTop').hide();
			    }
			};
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#gotoTop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
} window.awe_backtotop = awe_backtotop;


$(window).load(function () {
    if ($(window).width() <= 991) {
        $(document).click(function () {
            $('#topbar_mb').hide();
        });
        $('#topbar_trigger').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('#topbar_mb').toggle();
        });
    }
    if ($(window).width() <= 767) {
        $('.filter_list').removeClass('in');
        // mobile filter
        $('#filter_group').removeClass('in');
        $(".widget_links li input").click(function () {
            $('#filter_group').removeClass('in');
        });

        // category menu
        $('.left_menu .nav-pills > li > a i').click(function (e) {
            e.preventDefault();
            var $show_menu = $(this).closest('li.menu').find('.submenu');
            $('.submenu').slideUp();
            if ($show_menu.css('display') == 'none') {
                $show_menu.slideDown();
            }
            else {
                $show_menu.slideUp();
            }
        })
        // endcategory menu
    }
    // mark the chosen color
    $('.color_block').click(function () {
        $(this).parent().toggleClass('bordercolor');
    });
    // end mark the chosen color 
});

$('.ct-mobile li .ti-plus').click(function () {
    $(this).closest('li').find('> .sub-menu').slideToggle("fast");
    $(this).closest('i').toggleClass('fa-plus fa-minus');
    return false;
});
$('.menu-parent').click(function (event) {
    event.preventDefault();
    var state = $(this).attr("data-title");
    var href = $(this).attr("href");
    if (state === '1') {
        $(this).attr("data-title", '0');
        $(this).closest('li').find('> .sub-menu').slideToggle("fast");
        $(this).closest('li').find('i').toggleClass('fa-plus fa-minus');
    } else {
        $(this).attr("data-title", '1');
        window.location.href = href;
    }
    //alert(state)
});

function AddToCart(productid, qty,color,size) {
    var _qty = 1;
    if (qty === '')
        _qty = $('#qty').val();
    else
        _qty = qty;
    var dataPost = {
        "productId": productid,
        "qty": _qty,
        "color": color,
        "size":size
    };
    //alert('a')
    $.ajax({
        type: "POST",
        url: "/Cart/Add",
        data: dataPost,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            $('.top_cart_qty').text(data.CartItems.length);
            $('#alert-addtocard').show();

            $('.cart-popup-count').text(data.CartItems.length);
            setTimeout(function() {
                $('#alert-addtocard').hide();
            }, 5000);
            //var pageCartItem = "";
            //$.each(data.CartItems, function () {
            //    var color = this.Color;
            //    var size = this.Size;
            //    var productName = '';
            //    if (color !== '' || size !== '') {
            //        productName = ' (' + color + '-' + size + ')';
            //    }
            //    pageCartItem = pageCartItem + '<div class="clearfix cart_product productid-' + this.ProductId + '">'
            //        + '<a class="cart_image" href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">'
            //        + '<img src="' + this.Images + '" alt="' + this.ProductName + '" >'
            //        + '</a>'
            //        + '<div class="cart_info">'
            //        + '<div class="cart_name">'
            //        + '<a href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">' + this.ProductName + productName + '</a>'
            //        + '</div>'
            //        + '<div class="row-cart-left">'
            //        + '<div class="cart_item_name">'
            //        + '<div>'
            //        + '<label class="cart_quantity">Số lượng</label>'
            //        + '<div class="cart_select">'
            //        + '<div class="input-group-btn">'
            //        + '<input class="variantID" type="hidden" name="variantId" value="' + this.ProductId + '">'
            //        + '<button onClick="ChangeDownCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');"  class="reduced items-count btn-minus btn btn-default" type="button">–</button>'
            //        + '<input type="text" maxlength="12" min="0" class="input-text number-sidebar qtyItem' + this.ProductId + '" id="qtyItem' + this.ProductId + '" name="Lines" id="updates_' + this.ProductId + '" size="4" value="' + this.Qty + '" onchange="ChangeCart(' + this.ProductId + ',this)">'
            //        + '<button onClick="ChangeUpCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');" class="increase items-count btn-plus btn btn-default" type="button">+</button></div>'
            //        + '</div>'
            //        + '</div>'
            //        + '</div>'
            //        + '<div class="text-right cart_prices">'
            //        + '<div class="cart__price">'
            //        + '<span class="cart__sale-price">' + formatInputToMoney(this.Price) + 'đ</span>'
            //        + '</div>'
            //        + '<a class="cart__btn-remove remove-item-cart" href="javascript:void(0)" data-id="' + this.ProductId + '" onclick="ReoveItemCart(' + this.ProductId + ');">Bỏ sản phẩm</a>'
            //        + '</div>'
            //        + '</div>'
            //        + '</div>'
            //        + '</div>';
            //});
            //$('.cart-footer').show();
            //$('.total-price').text(formatInputToMoney(data.TotalPrice));
            //$('.top_cart_qty').text(data.CartItems.length);
            //$('#cart_body').html(pageCartItem);
            //$("#cart-sidebars").addClass('active');
            //$(".backdrop__body-backdrop___1rvky").addClass('active');
            //alert(data.CartItems.length)
        },
        error: function (xhr, status, error) {
            //alert('er')
        }
    });

};

function ReoveItemCart(productid) {
    var dataPost = {
        "productId": productid
    };

    $.ajax({
        type: "POST",
        url: "/Cart/Remove",
        data: dataPost,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            $('.cart-popup-count').text(data.CartItems.length);
            var pageCartItem = "";
            $.each(data.CartItems, function () {
                var color = this.Color;
                var size = this.Size;
                var productName = '';
                if (color !== '' || size !== '') {
                    productName = ' (' + color + '-' + size + ')';
                }
                pageCartItem = pageCartItem + '<div class="clearfix cart_product productid-' + this.ProductId + '">'
                                    + '<a class="cart_image" href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">'
                                    + '<img src="' + this.Images + '" alt="' + this.ProductName + '" >'
                                    + '</a>'
                                    + '<div class="cart_info">'
                                    + '<div class="cart_name">'
                                    + '<a href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">' + this.ProductName +productName+ '</a>'
                                    + '</div>'
                                    + '<div class="row-cart-left">'
                                    + '<div class="cart_item_name">'
                                    + '<div>'
                                    + '<label class="cart_quantity">Số lượng</label>'
                                    + '<div class="cart_select">'
                                    + '<div class="input-group-btn">'
                                    + '<input class="variantID" type="hidden" name="variantId" value="' + this.ProductId + '">'
                                    + '<button onClick="ChangeDownCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');" class="reduced items-count btn-minus btn btn-default" type="button">–</button>'
                                    + '<input type="text" maxlength="12" min="0" class="input-text number-sidebar qtyItem' + this.ProductId + '" id="qtyItem' + this.ProductId + '" name="Lines" id="updates_' + this.ProductId + '" size="4" value="' + this.Qty + '" onchange="ChangeCart(' + this.ProductId + ',this)">'
                                    + '<button onClick="ChangeUpCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');" class="increase items-count btn-plus btn btn-default" type="button">+</button></div>'
                                    + '</div>'
                                    + '</div>'
                                    + '</div>'
                                    + '<div class="text-right cart_prices">'
                                    + '<div class="cart__price">'
                                    + '<span class="cart__sale-price">' + formatInputToMoney(this.Price) + 'đ</span>'
                                    + '</div>'
                                    + '<a class="cart__btn-remove remove-item-cart" href="javascript:void(0)" data-id="' + this.ProductId + '" onclick="ReoveItemCart(' + this.ProductId + ');">Bỏ sản phẩm</a>'
                                    + '</div>'
                                    + '</div>'
                                    + '</div>'
                                    + '</div>'
            });
            if (data.CartItems.length <= 0) {
                pageCartItem = '<div class="cart-empty">'
                + '<img src="/Themes/images/empty-bags.jpg" class="img-responsive center-block" alt="Giỏ hàng trống">'
                + '<div class="btn-cart-empty"><a class="btn btn-default" href="/" title="Tiếp tục mua sắm">Tiếp tục mua sắm</a></div></div>'

                $('.cart-footer').hide();
            }
            $('#cart_body').html(pageCartItem);
            $('.total-price').text(formatInputToMoney(data.TotalPrice));
            $('.top_cart_qty').text(data.CartItems.length);
            $("#cart-sidebars").addClass('active');
            $(".backdrop__body-backdrop___1rvky").addClass('active');
            //alert(data.CartItems.length)
        },
        error: function (xhr, status, error) {
            //alert('er')
        }
    });
};

function ChangeDownCart(productid, txtid) {
    //alert(txtid)
    var result = document.getElementById(txtid);
    var _txtid = result.value;
    if (!isNaN(_txtid) && _txtid > 1) {
        result.value--;
        var dataPost = {
            "productId": productid,
            "qty": result.value--
        };

        $.ajax({
            type: "POST",
            url: "/Cart/Change",
            data: dataPost,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                $('.cart-popup-count').text(data.CartItems.length);
                var pageCartItem = "";
                $.each(data.CartItems, function () {
                    var color = this.Color;
                    var size = this.Size;
                    var productName = '';
                    if (color !== '' || size !== '') {
                        productName = ' (' + color + '-' + size + ')';
                    }
                    pageCartItem = pageCartItem + '<div class="clearfix cart_product productid-' + this.ProductId + '">'
                                        + '<a class="cart_image" href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">'
                                        + '<img src="' + this.Images + '" alt="' + this.ProductName + '" >'
                                        + '</a>'
                                        + '<div class="cart_info">'
                                        + '<div class="cart_name">'
                                        + '<a href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">' + this.ProductName + productName+'</a>'
                                        + '</div>'
                                        + '<div class="row-cart-left">'
                                        + '<div class="cart_item_name">'
                                        + '<div>'
                                        + '<label class="cart_quantity">Số lượng</label>'
                                        + '<div class="cart_select">'
                                        + '<div class="input-group-btn">'
                                        + '<input class="variantID" type="hidden" name="variantId" value="' + this.ProductId + '">'
                                        + '<button onClick="ChangeDownCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');"  class="reduced items-count btn-minus btn btn-default" type="button">–</button>'
                                        + '<input type="text" maxlength="12" min="0" class="input-text number-sidebar qtyItem' + this.ProductId + '" id="qtyItem' + this.ProductId + '" name="Lines" id="updates_' + this.ProductId + '" size="4" value="' + this.Qty + '" onchange="ChangeCart(' + this.ProductId + ',this)">'
                                        + '<button onClick="ChangeUpCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');" class="increase items-count btn-plus btn btn-default" type="button">+</button></div>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                                        + '<div class="text-right cart_prices">'
                                        + '<div class="cart__price">'
                                        + '<span class="cart__sale-price">' + formatInputToMoney(this.Price) + 'đ</span>'
                                        + '</div>'
                                        + '<a class="cart__btn-remove remove-item-cart" href="javascript:void(0)" data-id="' + this.ProductId + '" onclick="ReoveItemCart(' + this.ProductId + ');">Bỏ sản phẩm</a>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                });
                $('.cart-footer').show();
                $('.total-price').text(formatInputToMoney(data.TotalPrice));
                $('.top_cart_qty').text(data.CartItems.length);
                $('#cart_body').html(pageCartItem);
                $("#cart-sidebars").addClass('active');
                $(".backdrop__body-backdrop___1rvky").addClass('active');
                //alert(data.CartItems.length)
            },
            error: function (xhr, status, error) {
                //alert('er')
            }
        });
    }
    else
        return false;
};

function ChangeUpCart(productid, txtid) {
    var result = document.getElementById(txtid);
    var _txtid = result.value;
    if (!isNaN(_txtid)) {
        result.value++;
        var dataPost = {
            "productId": productid,
            "qty": result.value++
        };

        $.ajax({
            type: "POST",
            url: "/Cart/Change",
            data: dataPost,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                $('.cart-popup-count').text(data.CartItems.length);
                var pageCartItem = "";
                $.each(data.CartItems, function () {
                    var color = this.Color;
                    var size = this.Size;
                    var productName = '';
                    if (color !== '' || size !== '') {
                        productName = ' (' + color + '-' + size + ')';
                    }
                    pageCartItem = pageCartItem + '<div class="clearfix cart_product productid-' + this.ProductId + '">'
                                        + '<a class="cart_image" href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">'
                                        + '<img src="' + this.Images + '" alt="' + this.ProductName + '" >'
                                        + '</a>'
                                        + '<div class="cart_info">'
                                        + '<div class="cart_name">'
                                        + '<a href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">' + this.ProductName + productName+'</a>'
                                        + '</div>'
                                        + '<div class="row-cart-left">'
                                        + '<div class="cart_item_name">'
                                        + '<div>'
                                        + '<label class="cart_quantity">Số lượng</label>'
                                        + '<div class="cart_select">'
                                        + '<div class="input-group-btn">'
                                        + '<input class="variantID" type="hidden" name="variantId" value="' + this.ProductId + '">'
                                        + '<button onClick="ChangeDownCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');"  class="reduced items-count btn-minus btn btn-default" type="button">–</button>'
                                        + '<input type="text" maxlength="12" min="0" class="input-text number-sidebar qtyItem' + this.ProductId + '" id="qtyItem' + this.ProductId + '" name="Lines" id="updates_' + this.ProductId + '" size="4" value="' + this.Qty + '" onchange="ChangeCart(' + this.ProductId + ',this)">'
                                        + '<button onClick="ChangeUpCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');" class="increase items-count btn-plus btn btn-default" type="button">+</button></div>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                                        + '<div class="text-right cart_prices">'
                                        + '<div class="cart__price">'
                                        + '<span class="cart__sale-price">' + formatInputToMoney(this.Price) + 'đ</span>'
                                        + '</div>'
                                        + '<a class="cart__btn-remove remove-item-cart" href="javascript:void(0)" data-id="' + this.ProductId + '" onclick="ReoveItemCart(' + this.ProductId + ');">Bỏ sản phẩm</a>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                });
                $('.cart-footer').show();
                $('.total-price').text(formatInputToMoney(data.TotalPrice));
                $('.top_cart_qty').text(data.CartItems.length);
                $('#cart_body').html(pageCartItem);
                $("#cart-sidebars").addClass('active');
                $(".backdrop__body-backdrop___1rvky").addClass('active');
                //alert(data.CartItems.length)
            },
            error: function (xhr, status, error) {
                //alert('er')
            }
        });
    }
    else
        return false;
};

function ChangeCart(productid, item) {
    var dataPost = {
        "productId": productid,
        "qty": item.value
    };

    $.ajax({
        type: "POST",
        url: "/Cart/Change",
        data: dataPost,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            $('.cart-popup-count').text(data.CartItems.length);
            var pageCartItem = "";
            $.each(data.CartItems, function () {
                var color = this.Color;
                var size = this.Size;
                var productName = '';
                if (color !== '' || size !== '') {
                    productName = ' (' + color + '-' + size + ')';
                }
                pageCartItem = pageCartItem + '<div class="clearfix cart_product productid-' + this.ProductId + '">'
                                    + '<a class="cart_image" href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">'
                                    + '<img src="' + this.Images + '" alt="' + this.ProductName + '" >'
                                    + '</a>'
                                    + '<div class="cart_info">'
                                    + '<div class="cart_name">'
                                    + '<a href="/products/' + this.KeySlug + '" title="' + this.ProductName + '">' + this.ProductName +productName+ '</a>'
                                    + '</div>'
                                    + '<div class="row-cart-left">'
                                    + '<div class="cart_item_name">'
                                    + '<div>'
                                    + '<label class="cart_quantity">Số lượng</label>'
                                    + '<div class="cart_select">'
                                    + '<div class="input-group-btn">'
                                    + '<input class="variantID" type="hidden" name="variantId" value="' + this.ProductId + '">'
                                    + '<button onClick="ChangeDownCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');"  class="reduced items-count btn-minus btn btn-default" type="button">–</button>'
                                    + '<input type="text" maxlength="12" min="0" class="input-text number-sidebar qtyItem' + this.ProductId + '" id="qtyItem' + this.ProductId + '" name="Lines" id="updates_' + this.ProductId + '" size="4" value="' + this.Qty + '" onchange="ChangeCart(' + this.ProductId + ',this)">'
                                    + '<button onClick="ChangeUpCart(' + this.ProductId + ',\'qtyItem' + this.ProductId + '\');" class="increase items-count btn-plus btn btn-default" type="button">+</button></div>'
                                    + '</div>'
                                    + '</div>'
                                    + '</div>'
                                    + '<div class="text-right cart_prices">'
                                    + '<div class="cart__price">'
                                    + '<span class="cart__sale-price">' + formatInputToMoney(this.Price) + 'đ</span>'
                                    + '</div>'
                                    + '<a class="cart__btn-remove remove-item-cart" href="javascript:void(0)" data-id="' + this.ProductId + '" onclick="ReoveItemCart(' + this.ProductId + ');">Bỏ sản phẩm</a>'
                                    + '</div>'
                                    + '</div>'
                                    + '</div>'
                                    + '</div>'
            });
            $('.cart-footer').show();
            $('.total-price').text(formatInputToMoney(data.TotalPrice));
            $('.top_cart_qty').text(data.CartItems.length);
            $('#cart_body').html(pageCartItem);
            $("#cart-sidebars").addClass('active');
            $(".backdrop__body-backdrop___1rvky").addClass('active');
            //alert(data.CartItems.length)
        },
        error: function (xhr, status, error) {
            //alert('er')
        }
    });

}

