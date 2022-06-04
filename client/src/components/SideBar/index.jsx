import * as C from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faCompass, faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import { faHouse, faPhotoFilm, faHeadphones, faClapperboard, faArrowDownLong} from "@fortawesome/free-solid-svg-icons"
export const SideBar = () => {
    return (
        <C.sideBar>
            <C.sideBarItems>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faHouse} />
                        <p>Inicio</p> 
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faCompass} />
                        <p>Explorar</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faCirclePlay} />
                        <p>Shorts</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faClapperboard} />
                        <p>Incrições</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faYoutube} />
                        <p>Originais</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faHeadphones} />
                        <p>Music</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faPhotoFilm} />
                        <p>Biblioteca</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faArrowDownLong} />
                        <p>Downloads</p>
                    </C.barItensContainer>
                </li>
            </C.sideBarItems>
        </C.sideBar>
    )
}