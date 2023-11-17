import { Link } from 'react-router-dom';
import UserOne from '../images/user/user-01.jpg';
import UserTwo from '../images/user/user-07.jpg';
import UserThree from '../images/user/user-03.jpg';
import UserFour from '../images/user/user-12.jpg';
import UserFive from '../images/user/user-05.jpg';

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Dernières inscriptions
      </h4>

      <div>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <img src={UserThree} alt="User" />
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Charles Bernard
              </h5>
              <p>
                <span className="text-sm text-black dark:text-white">
                  Formations BTP public
                </span>
                <span className="text-xs"> . 12 min</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-white">3</span>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <img src={UserFive} alt="User" />
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Patricia Romaine</h5>
              <p>
                <span className="text-sm">Formations BTP public</span>
                <span className="text-xs"> . 10:12 PM</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <img src={UserOne} alt="User" />
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Frederic George
              </h5>
              <p>
                <span className="text-sm text-black dark:text-white">
                  Compte prorata
                </span>
                <span className="text-xs"> . Dim</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-white">2</span>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <img src={UserTwo} alt="User" />
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-7"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Jacques Daniel</h5>
              <p>
                <span className="text-sm">Chorus PRO</span>
                <span className="text-xs"> . Juin 23</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <img src={UserFive} alt="User" />
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Marie Cathérine</h5>
              <p>
                <span className="text-sm">Memoire technique spécial BTP</span>
                <span className="text-xs"> . Mai 20</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChatCard;
