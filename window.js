$(() => {

  $('#text-input').bind('input propertychange', function() {
    const text = this.value

    const kbn = text.substring(0,1)
    $('#kbn').text(kbn)

    const uriage = text.substring(2,6)
    $('#uriage').text(uriage)

    const id = text.substring(7,9)
    $('#id').text(id)

  })

  $('#text-input').focus() // focus input box
})
