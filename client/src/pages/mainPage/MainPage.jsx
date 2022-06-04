import { Header } from "../../components/Header"
import { SideBar } from "../../components/SideBar"
import { Link } from "react-router-dom"
import * as C from "./styled"
import { db } from "../../helpers/database"
export const MainPage = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 1000)
    }
    return (
        <>
        <Header />
        <SideBar />
        <C.categoriesContainer>
            <C.categorieItem selected="on">Tudo</C.categorieItem>
            <C.categorieItem>Jogos</C.categorieItem>
            <C.categorieItem>Ao Vivo</C.categorieItem>
            <C.categorieItem>Musica</C.categorieItem>
            <C.categorieItem>React</C.categorieItem>
            <C.categorieItem>Ao Vivo</C.categorieItem>
            <C.categorieItem>Podcast</C.categorieItem>
            <C.categorieItem>Filmes</C.categorieItem>
            <C.categorieItem>Comedia</C.categorieItem>
            <C.categorieItem>Novos</C.categorieItem>
            <C.categorieItem>Envios Recentes</C.categorieItem>
        </C.categoriesContainer>
            <C.GridContainerVideos>
                {db.map(video => {
                    return (
                        <C.gridItemVideo key={video.id}>
                            <Link to={`videos/${video.video_tag}`}> 
                            <img src={video.thumbnail_url} alt="Thumbnail Image" />
                            </Link>
                            <C.infoGrid>
                                <img src={video.author_channel_img_url}></img>
                                <span>{video.video_name}</span>
                            </C.infoGrid>
                                <span>{video.author_channel_name}</span><br/>
                                <span>{randomNumber()} mil Vizualizações</span><br/>
                        </C.gridItemVideo>
                    )
                })}
            </C.GridContainerVideos>
            
        
        </>
    )
}