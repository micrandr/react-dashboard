import Breadcrumb from '../components/Breadcrumb';
import DataListSessions from '../components/DataListSessions';

import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
import { FullFileBrowser } from 'chonky';

setChonkyDefaults({ iconComponent: ChonkyIconFA });

const Sessions = () => {
    const files = [
        { id: 'lht', 
            name: 'Projects', 
            isDir: true 
        },
        {
            id: 'mcd',
            name: 'file-icon-pdf-001.png',
            thumbnailUrl: '/documents/urssaf/Guide-CSE.pdf',
        },
        {
            id: 'tbx',
            name: 'file-icon-pdf-001.png',
            thumbnailUrl: '/documents/urssaf/Plaquette_URetVous_PL.pdf',
        },
    ];
    const folderChain = [{ id: 'xcv', name: 'Capnum', isDir: true }];

    return (
        <>

            <Breadcrumb pageName="Gestionnaire de fichiers" />

            <div style={{ height: 300 }}>
                <FullFileBrowser files={files} folderChain={folderChain} />
            </div>
        </>

    )
}
export default Sessions;