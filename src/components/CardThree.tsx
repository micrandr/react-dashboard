const CardThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">

        <svg className="fill-primary dark:fill-white"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.184v-.184c0-1.657-1.343-3-3-3s-3 1.343-3 3h-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v.184c-1.161.415-2 1.514-2 2.816v9c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-9c0-1.302-.839-2.401-2-2.816zm-4-.184c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1v-2zm-8 0c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1v-2zm12 12c0 .551-.448 1-1 1h-12c-.552 0-1-.449-1-1v-6h14v6zm0-7h-14v-2c0-.551.448-1 1-1 0 1.104.896 2 2 2s2-.896 2-2h4c0 1.104.896 2 2 2s2-.896 2-2c.552 0 1 .449 1 1v2z"></path>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            1
          </h4>
          <span className="text-sm font-medium">Sessions en cours</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3 hidden">
          2.59%
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

export default CardThree;
