import * as C from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars, faMagnifyingGlass, faMicrophone, faBell, faVideo } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <>
        <C.body/>
            <C.mainContainer>
                <C.navItems>
                        <i><FontAwesomeIcon icon={faBars} /></i>
                        <Link to="/"><h3><i><FontAwesomeIcon icon={faYoutube} /></i></h3></Link>
                        <C.logoName>YouDev</C.logoName>
                        <input type="text" placeholder="Pesquisar..."></input><>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button></>
                        <C.micImg><FontAwesomeIcon icon={faMicrophone} /></C.micImg>
                        <C.userActions>
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faBell} />
                        <img src="https://yt3.ggpht.com/yti/APfAmoHVZdM64B6wX8vuO7e_rxX9qis8ottRvPb2uw=s88-c-k-c0x00ffffff-no-rj-mo"></img>
                        </C.userActions>
            </C.navItems>
            
        </C.mainContainer>
        </>
        
    )
}