import './styles.scss';

function BarFilter() {
  return (
    <div className="filter-container">
      <div className="categories">
        CATEGORIES
        {' '}
        <span>▼</span>
      </div>
      <div className="filter">
        FILTER
        {' '}
        <span>▼</span>
      </div>
    </div>
  );
}

export default BarFilter;
