const CardTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        
        <svg className="fill-primary dark:fill-white"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g><path d="M17 3h-10c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3zm-8 2h6v1c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1v-1zm9 13c0 .551-.449 1-1 1h-10c-.551 0-1-.449-1-1v-12c0-.551.449-1 1-1h1v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1h1c.551 0 1 .449 1 1v12zM16 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 14h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 11h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
        </g>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            2
          </h4>
          <span className="text-sm font-medium">Factures en attente</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          2.35%
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardTwo;
