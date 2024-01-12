import './App.css';
import {SliderCarousel} from './assets/components/Slider';
function App() {
  return (
    <div className="container">
      <div className='container__title'>Полезные материалы</div>
      <div className='container__paragraph'>Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</div>
      <SliderCarousel></SliderCarousel>
    </div>
  );
}

export default App;
