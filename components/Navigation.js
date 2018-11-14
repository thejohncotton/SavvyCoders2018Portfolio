function handleNavigation(event) {
    // pull the component name from the text in the anchor tag
    var component = event.target.textContent;
    event.preventDefault();
    // select a piece of the state tree by component
    render(state[component]);
  }
function buildLinks(linkArray) {
    var i = 0;
    var links = "";
    while (i < linkArray.length) {
      links += `
              <li>
                  <a href='/${linkArray[i]}'>${linkArray[i]}</a>
              </li>
          `;
      i++;
    }
    return links;
  }
  export default function Navigation(state) {
    return `
      <div class="navigation">
          <ul>
              ${buildLinks(state.links)}
          </ul>
      </div>
      `;
  }