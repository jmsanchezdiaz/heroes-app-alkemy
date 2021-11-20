interface props {
  value: string;
}

const ProgressBar: React.FC<props> = ({ value }) => {
  return (
    <div
      style={{ maxWidth: "100%", height: ".5rem" }}
      className=" progress flex-grow-1 mx-2  "
    >
      <div
        title={value}
        className="progress-bar-animated progress-bar text-black progress-bar-striped bg-danger"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default ProgressBar;
