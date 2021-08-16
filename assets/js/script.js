 // accordions //


let whyItem = $('.why-accordion .item')
let itemContent = $('.why-accordion .item-content')
let itemOneP = $('.why-accordion .item p:nth-child(1)')
let itemA = $('.why-choose-us-content .why-accordion .item a')


whyItem.click(function (e) {

    if (whyItem.hasClass('item-sec')) {
        console.log(
            'fired'
        )
        whyItem.addClass('clickItem')
        itemOneP.addClass('p_bg')
        itemA.addClass('clickItemA')
        itemContent.fadeIn('slower')
        whyItem.removeClass('item-sec')
    } else {
        whyItem.removeClass('clickItem')
        itemOneP.removeClass('p_bg')
        itemA.removeClass('clickItemA')
        itemContent.fadeOut('slower')
        whyItem.addClass('item-sec')
    }
    // whyItem.toggleClass('clickItem')
    // itemOneP.toggleClass('p_bg')
    // itemA.toggleClass('clickItemA')
    // itemContent.toggle(500)


})

