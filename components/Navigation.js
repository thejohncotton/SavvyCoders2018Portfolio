import { lowerCase } from "lodash";
function buildLinks(linkArray) {
    var links = "";
    var route = "";  
    linkArray.forEach(link => {
        if (route !== "Home") {
          route = lowerCase(link);
        }
        links += `
                <li>
                    <a href='/${route}' data-navigo>
                        ${link}
                    </a>
                </li>
            `;
      });

      return links;
  }

export default function(state){
    return `
      <div class="navigation">
          <ul>
              ${buildLinks(state.links)}
          </ul>
      </div>
      `;
  }