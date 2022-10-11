import React from "react";
import ProductTile from "../../components/Tile/ProductTile";
import './Product.css'
import PhotoSlider from "../../components/photoslider/PhotoSlider";
import Bumper from "../../components/bumper/Bumper";
import productfoto01 from "../../assets/producten/001.jpg"
import productfoto02 from "../../assets/producten/002.jpg"
import productfoto03 from "../../assets/producten/003.jpg"
import productfoto04 from "../../assets/producten/004.jpg"
import productfoto05 from "../../assets/producten/005.jpg"
import productfoto06 from "../../assets/producten/006.jpg"
import productfoto07 from "../../assets/producten/007.jpg"
import productfoto08 from "../../assets/producten/008.jpg"
import productfoto09 from "../../assets/producten/009.jpg"
import productfoto10 from "../../assets/producten/010.jpg"
import productfoto11 from "../../assets/producten/011.jpg"
import productfoto12 from "../../assets/producten/012.jpg"
import productfoto13 from "../../assets/producten/013.jpg"
import productfoto14 from "../../assets/producten/014.jpg"
import productfoto15 from "../../assets/producten/015.jpg"
import productfoto16 from "../../assets/producten/016.jpg"
import productfoto17 from "../../assets/producten/017.jpg"
import productfoto18 from "../../assets/producten/018.jpg"
import productfoto19 from "../../assets/producten/019.jpg"
import productfoto20 from "../../assets/producten/020.jpg"
import productfoto21 from "../../assets/producten/021.jpg"


// hier moet ergens een GET-request voor de producten uit de database komen.
/*const result = await axios.get('https://localhost:8080/resources/data.sql',
    {'Accept': 'application/json', //hier ook de authorisatietoken
    });*/

// async function fetchData() {
// try{
// const result = await axios.get('https://localhost:8080');
// } catch(e) {
// console.error(e);
// }}

function Product() {
    return(
        <div>


            <h1 className="bekijkOnsAanbod"> Bekijk ons aanbod </h1>
    <article className="container-product">

        <ProductTile
            productName="Wortels"
            photo={productfoto01}
        price="1,54"
        description="Grachtenwortels. Hier staat hoe locaal en biologisch dit product geproduceerd is."
        />

        <ProductTile
            productName="Knoflook"
            price="3,54"
            description="Luxemburgse kloflook. Geproduceerd in een verlaten klooster in Kerkrade."
            photo={productfoto02}
        />

        <ProductTile
        productName="Botersla"
        photo={productfoto03}
        price="1,90"
        description="Boterzachte sla uit Almelo, waar ze écht lief zijn voor sla."
    />

        <ProductTile
        productName="Friese Tomaten"
        price="1,55"
        photo={productfoto04}
        description="Ook wel Obbema-tomaten. Al generaties gecultiveerd door de familie Obbema."
    />

        <ProductTile
            photo={productfoto05}
        productName="Druivensap"
        price="1,90"
        description="Rotterdamse druivensap. biologisch geproduceerd, handmatig geperst."
    />

        <ProductTile
            photo={productfoto06}
            productName="Honing"
        price="7,25"
        description=" Utrechtse Honing, geproduceerd door kalende oudere jongeren uit Utrecht."
    />

        <ProductTile
            photo={productfoto07}
            productName="Courgette"
        price="1,85"
        description="Leidense Courgette, de knapperigste courgetten van het land. Beter dan die vieze uit Oss"
    />

        <ProductTile
            photo={productfoto08}
            productName="Rode bessen"
        price="4,54"
        description="Hier staat hoe meestal locaal, duurzaam en biologisch dit product geproduceerd is."
    />

        <ProductTile
            photo={productfoto09}
            productName="Rode Peper"
        price="0,95"
        description="Echte hete pepertjes uit de Bijlmer. Zoals het meestal  geproduceerd is."
    />

   <ProductTile
       photo={productfoto10}
       productName="Witte peper"
        price="1,50"
        description="Deze pepertjes komen uit Zeeland, waar ze half in zee groeien. Ze zijn dus ook een beetje zout."
    />

      <ProductTile
          photo={productfoto11}
          productName="Aardbeien"
        price="2,00"
        description="Hier staat hoe product geproduceerd i beschrijving van het product. geproduceerd is."
    />

    <ProductTile
        photo={productfoto12}
        productName="Aubergine"
        price="0,54"
        description="beschrijving van het product. Hier staaproduct geproduceerd i"
    />

             <ProductTile
                 photo={productfoto13}
                 productName="Gaia Meloen"
        price="5,50"
        description="beschrijving van het product."
    />

          <ProductTile
              photo={productfoto14}
              productName="Blauwe bessen"
        price="3,55"
        description="beschrijving van het product. Hier staatoduceerd i"
    />

       <ProductTile
           photo={productfoto15}
           productName="Druiven"
        price="3,95"
        description="beschrijving van het product. Hier staat hoe locaal en biologisch dit product geproduceerd i"
    />

        <ProductTile
            photo={productfoto16}
            productName="12 eieren"
            price="1,90"
            description="beschrijving van het product. Hier staat hoe locaal en biologisch dit product geproduceerd i"
        />

        <ProductTile
            photo={productfoto17}
            productName="Koriander"
            price="1,15"
            description="beschrijving van het product. Hier staat hoe locaal en biologisch dit product geproduceerd i"
        />

        <ProductTile
            photo={productfoto18}
            productName="Olijfolie"
            price="7,20"
            description="beschrijving van het product. Hier staat hoe locaal en biologisch dit product geproduceerd i"
        />

        <ProductTile
            photo={productfoto19}
            productName="Olijven"
            price="2,25"
            description="Olijven uit Eindhoven. locaal en biologisch dit product geproduceerd i"
        />


        <ProductTile
            photo={productfoto20}
            productName="6 broodjes"
            price="1,60"
            description="Maken we zelf. Kan eigenlijk iedereen maken, dit is echt een dom product."
        />

        <ProductTile
            photo={productfoto21}
            productName="Rode kool"
            price="1,20"
            description="De allerlekkerste uit Breda hoe locaal en biologisch dit product geproduceerd i"
        />


    </article>




            <Bumper
                classname="bumper1"
            />
            <Bumper
                classname="bumper1"
            />

            <PhotoSlider
            classnaampje="topplaatje4"
            quote={null}
            greatmind="We love to make you Healthy"
            />




   </div>

    );
}

export default Product;