import { lowerCase } from "lodash";
function buildLinks(linkArray) {
    var i = 0;
    var links = "";
    var link = "";  
    while (i < linkArray.length) {
      if (linkArray[i] !== "home") {
        link = linkArray[i];
      }
// what's the value of link here?
      links += `
              <li>
                  <a href='/${lowerCase(link)}' data-navigo>
                      ${linkArray[i]}
                  </a>
              </li>
          `;

      i++;
    }
    return links;
  }

export default function Navigation(state){
    return `
      <div class="navigation">
          <ul>
              ${buildLinks(state.links)}
          </ul>
      </div>
      `;
  }