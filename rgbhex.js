// Generating RGB Color Value
window.generate_rgb_color = function() {
    // Red Random Value
    var r = Math.ceil(Math.random() * 255);
    // Green Random Value
    var g = Math.ceil(Math.random() * 255);
    // Blue Random Value
    var b = Math.ceil(Math.random() * 255);

    // Generated Random RGB Color 
    var rgb = `rgb(${r}, ${g}, ${b})`;

    // Update Body Background Color
    $('body').css('background-color', rgb)

    // Display Generated RGB Color
    $('#generated-color').text(rgb)
}


// Generating HEX Color Value
window.generate_hex_color = function() {
    // HEX Values
    var hex_values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'F'];

    //  Hex Generated Values
    var v1 = hex_values[Math.ceil(Math.random() * (Object.keys(hex_values).length - 1))]
    var v2 = hex_values[Math.ceil(Math.random() * (Object.keys(hex_values).length - 1))]
    var v3 = hex_values[Math.ceil(Math.random() * (Object.keys(hex_values).length - 1))]
    var v4 = hex_values[Math.ceil(Math.random() * (Object.keys(hex_values).length - 1))]
    var v5 = hex_values[Math.ceil(Math.random() * (Object.keys(hex_values).length - 1))]
    var v6 = hex_values[Math.ceil(Math.random() * (Object.keys(hex_values).length - 1))]

    // Generated Random HEX Color 
    var hex = `#${v1}${v2}${v3}${v4}${v5}${v6}`

    // Update Body Background Color
    $('body').css('background-color', hex)

    // Display Generated RGB Color
    $('#generated-color').text(hex)
}

$(function() {

    // Generate RGB Color Button Event Listener
    $('#generate-rgb-btn').click(function() {
        generate_rgb_color()
    })

    // Generate Hex Color Button Event Listener
    $('#generate-hex-btn').click(function() {
        generate_hex_color()
    })

})
