$(() => {

  $('#text-input').bind('input propertychange', function() {
    const text = this.value

    const kbn = text.substring(0,1)
    $('#kbn').val(kbn)

    const uriage = text.substring(2,6)
    $('#uriage').text(uriage)

    const id = text.substring(7,9)
    $('#id').text(id)

    $("#result").text(text)
  })

  $('#kbn').bind('input propertychange', function() {
    const text = this.value

    const kbn = text.substring(0,1) 
    const fullText = $('#text-input').val()
    $('#result').text(kbn + fullText.substring(1))

  })

  $('#text-input').focus() // focus input box
})
