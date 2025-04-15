import Caneca from '../../images/segundo banner.png';

export function createSecondBanner() {
    return `
      <section class="second-banner">
        <div class = "second-banner-text">
            <h2>Lorem ipsum</h2>
            <div>
              <span><i class="fa-solid fa-location-dot"></i></span>
              <p>
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
              </p>
            </div>
            <div>
              <span><i class="fa-solid fa-location-dot"></i></span>
              <p>
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              </p>
            </div>
            <div>
              <span><i class="fa-solid fa-location-dot"></i></span>
              <p>
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
              </p>
            </div>
        </div>
        <img src="${Caneca}" alt="Caneca" />
      </section>
    `;
  }