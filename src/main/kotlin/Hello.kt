import kotlin.browser.document

fun embed() {
    document.body!!.append(document.createElement("div").apply {
        textContent = "Hello, world!"
    })
}