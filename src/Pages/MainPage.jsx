import Navbars from "../Components/Navbars";
import Carousels from "../Components/Carousels";
import WhatWeDo from "../Components/WhatWeDo";
import Footer from "../Components/Footer";
import ImageGallery from "../Components/ImageGallery";

const MainPage = () => {
  return (
    <>
      <Navbars />        {/* Barra de navegação */}
      <Carousels />      {/* Carrossel com imagens ou mensagens */}
      <ImageGallery />   {/* Galeria de imagens */}
      <WhatWeDo />       {/* Seção sobre o que fazemos */}
      <Footer />         {/* Rodapé do site */}
    </>
  );
}

export default MainPage;
