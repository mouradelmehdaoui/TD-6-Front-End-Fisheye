const Landing = () => {
   
    landingContainer = document.querySelector(".landing-container");


    return landingContainer.innerHTML =
        `<ul class="nav">
        <li>
          <a href="">Parent Link 01</a>
          <ul class="nav__sub-menu">
            <li>
              <a href="">Child Link A</a>
            </li>
            <li>
              <a href="">Child Link B</a>
            </li>
            <li>
              <a href="">Child Link C</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Parent Link 02</a>
          <ul class="nav__sub-menu">
            <li>
              <a href="">Child Link A</a>
            </li>
            <li>
              <a href="">Child Link B</a>
            </li>
            <li>
              <a href="">Child Link C</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Parent Link 03</a>
          <ul class="nav__sub-menu">
            <li>
              <a href="">Child Link A</a>
            </li>
            <li>
              <a href="">Child Link B</a>
            </li>
            <li>
              <a href="">Child Link C</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Parent Link 04</a>
          <ul class="nav__sub-menu">
            <li>
              <a href="">Child Link A</a>
            </li>
            <li>
              <a href="">Child Link B</a>
            </li>
            <li>
              <a href="">Child Link C</a>
            </li>
          </ul>
        </li>
      </ul>`
}