import { Application } from "@hotwired/stimulus"

const application = Application.start()
//= require rails-ujs
//= require_tree .
// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
