import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="49538092"
            title="Acheter NORD STAGE 3-88 PIANO DE SCENE 88 NOTES TOUCHER LOURD"
            price={3999.99}
            image={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.music-privilege.fr%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F3%2Fimage%2F800x800%2F9df78eab33525d08d6e5fb8d27136e95%2Fk%2Fn%2Fkno-nord-stage-3-ha88%2Fmusic-privilege.fr-nord-stage-3-88-piano-de-scene-88-notes-toucher-lourd-31.png&f=1&nofb=1"
            }
            rating={5}
          />
          <Product
            id="49538093"
            title="Canon EOS R5"
            price={2555.98}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop.usa.canon.com%2Fwcsstore%2FExtendedSitesCatalogAssetStore%2Feos-r5-usm-kit_1_xl.png&f=1&nofb=1"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking"
            price={255.98}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkitchenaid-h.assetsadobe.com%2Fis%2Fimage%2Fcontent%2Fdam%2Fbusiness-unit%2Fkitchenaid%2Fen-us%2Fdigital-assets%2Fpages%2Fhomepage%2Foptimizations-january2020%2Fgray-mixer-desktop.png%3Fbgc%3D246%2C246%2C246%26fit%3Dconstrain%26fmt%3Dpng-alpha%26hei%3D1016%26qlt%3D30%26resMode%3Dsharp2%26utc%3D2020-03-11T16%3A46%3A27Z&f=1&nofb=1"
          />
          <Product
            id="49538095"
            title="Dring Up Ugly Sweater"
            price={9.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.bigcommerce.com%2Fserver1300%2F1hozm2en%2Fproducts%2F999%2Fimages%2F10067%2Fbeer_christmas_sweater__45816.1448379510.1280.1280.png%3Fc%3D2&f=1&nofb=1"
          />

          <Product
            id="49538096"
            title="Garmin Phenix 6x Solar GPS Multi Sport Watch"
            price={699.99}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6RUhhDj69_UbjE9WQSHfKAHaHa%26pid%3DApi&f=1"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538097"
            title="Garmin Phenix 6x Solar GPS Multi Sport Watch"
            price={489.99}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lg.com%2Fin%2Fimages%2FMN%2Ffeatures%2F34WK95C-W-34-Curved-UltraWide-Thumbnail.png&f=1&nofb=1"
          />
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
