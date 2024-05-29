const Title = ({ title }) => {
  return (
    <div className="title">
      <h2 className="title">{title || 'Default Title'}</h2>
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;