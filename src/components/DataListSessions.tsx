import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import SessionService from "../services/SessionServices";

const DataListSessions = () => {

    const navigate = useNavigate()
    const [sessions, setSessions] = useState<any[]>([]);

    useEffect(() => {
        retrieveSessions();
      }, []);


    const retrieveSessions = () => {
        SessionService.getAll()
          .then(response => {
            setSessions(response.data['hydra:member']);
            // console.log(response.data['hydra:member']);
          })
          .catch(e => {
            console.log(e);
          });
      };

    



    return (

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Liste des sessions          
                    <Link
                        to="/sessions/create"
                        className="inline-flex items-center justify-center rounded-md border border-primary py-2 px-10 mx-5 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Nouveau
                    </Link>
                </h4>
            </div>        

            <div className="flex flex-wrap">
                {sessions.map( (session, index) => { 

                    const sessionEditLink = `/sessions/edit/${ session.id}`
                    const sessionFicheLink = `/sessions/fiche/${ session.id}`

                    if (session.sessionName!='') {

                    return (
                            <Card className="w-50 m-5">
                                <CardHeader color="blue-gray" className="relative h-192">
                                    <img
                                    src="/favicon.png"
                                    alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h6" color="blue-gray" className="mb-2">
                                        <Link to={sessionFicheLink}>{session.sessionName}</Link>
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-3   flex">
                                    <Link to={sessionFicheLink}><Button className="text-black flex">FICHE</Button></Link>
                                    <Link to={sessionEditLink}><Button className="text-black flex">EDITER</Button></Link>
                                </CardFooter>
                                </Card>
                    )
                    }
                })}
            </div>
        </div>

    )

}

export default DataListSessions