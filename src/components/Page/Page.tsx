import './Page.scss';

function Page() {
  return (
    <div className="page">
      <div className="page__number">
        <button className="arrow arrow-left"></button>
        <div className="numbers">
          <button className="numbers__item">1</button>
          <button className="numbers__item">2</button>
          <button className="numbers__item">...</button>
          <button className="numbers__item">9</button>
          <button className="numbers__item">10</button>
        </div>
        <button className="arrow arrow-right"></button>
      </div>
      <button className="numbers__item numbers__item_end">24</button>
    </div>
  );
}

export default Page;
