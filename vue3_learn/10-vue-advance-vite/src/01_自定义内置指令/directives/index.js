import directiveFocus from "./focus"
import directiveUnit from "./unit"
import directiveFormatTime from "./formatTime"

export default function directives(app) {
  directiveFocus(app)
  directiveUnit(app)
  directiveFormatTime(app)
}