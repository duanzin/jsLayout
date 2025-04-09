import bannerImage from '../../images/Free_Mug_Mockup_2.png';

export function createBanner() {
  return `
      <section class="banner">
        <img src=${bannerImage} alt="Caneca Avanti" />
        <div class="banner-content">
          <h2>Lorem Ipsum</h2>
          <p>
            Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. 
            Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. 
            Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. 
            Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. 
            Fusce sagittis elit a libero commodo egestas efficitur id augue.
          </p>
          <p>
            Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. 
            Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. 
            Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. 
            Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. 
            Fusce sagittis elit a libero commodo egestas efficitur id augue.
          </p>
        </div>
      </section>
    `;
}
