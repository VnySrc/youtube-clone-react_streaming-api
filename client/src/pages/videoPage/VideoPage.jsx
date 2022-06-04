import { Link , useParams } from "react-router-dom";
import { Header } from "../../components/Header"
import * as C from "./styled"
import { db } from "../../helpers/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons"
import { faShare, faScissors,faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export const VideoPage = () => {
    let videoInfo = { }
    const tag = useParams()
    const randomNumber = () => {
        return Math.floor(Math.random() * 1000)
    }
    const randomNumberData = () => {
        return Math.floor(Math.random() * 10)
    }
   

    return (
        <>
            <Header />
            <C.mainGrid>
                <C.videoContainerGrid>
                    <C.videoContainer>
                        {db.map((video) => {
                            if (video.video_tag == tag.tag) {
                                return (
                                    <video width=" 850px" height="486px" controls autoPlay="on">
                                    <source src={`http://node-streaming-api.herokuapp.com/videos/${tag.tag}`} type="video/mp4"></source>
                                    </video>
                                )
                            }
                        })}
                        {db.map(video => {
                            if (video.video_tag == tag.tag) {
                                videoInfo.channel_img = video.author_channel_img_url
                                videoInfo.channel_name = video.author_channel_name
                                return(
                                    <C.videoTitle>{video.video_name}</C.videoTitle>
                                )
                            }
                        }
                        )}
                        <C.videoInfoActions>
                            <span>1.000 Vizualizações</span>
                            <span><FontAwesomeIcon icon={faThumbsUp}/> Gostei</span>
                            <span><FontAwesomeIcon icon={faThumbsDown}/> Não Gostei</span>
                            <span><FontAwesomeIcon icon={faShare}/> Compartilhar</span>
                            <span><FontAwesomeIcon icon={faDownload}/> Download</span>
                            <span><FontAwesomeIcon icon={faScissors}/> Clipe</span>
                            <span><FontAwesomeIcon icon={faFloppyDisk}/> Salvar</span>
                            <span>...</span>
                        </C.videoInfoActions>
                        <C.videoDescriptionContainer>
                            <C.channelDescription>
                                <section>
                                    <img src={videoInfo.channel_img} alt="channel image" />
                                    <span>{videoInfo.channel_name}</span>
                                </section>
                                <section>
                                    <button> Inscrever-se </button>
                                </section>
                            </C.channelDescription>
                            <C.showMoreDescription>
                                <p>A complete video description here</p>
                                <p><a href="/">#emalta</a><a href="/">#programação</a><a href="/">#music </a></p>
                            </C.showMoreDescription>
                            <C.videoComents>
                                <p>Os comentários estão desativados. <a href="/">Saiba mais</a></p>
                            </C.videoComents>
                        </C.videoDescriptionContainer>
                    </C.videoContainer>
                </C.videoContainerGrid>
            <C.sideVideoList>
                <C.categoriesContainer>
                    <C.categorieItem selected="on">Todos</C.categorieItem>
                    <C.categorieItem>React</C.categorieItem>
                    <C.categorieItem>Angular</C.categorieItem>
                    <C.categorieItem>Relacionados</C.categorieItem>
                </C.categoriesContainer>
                {db.map(video => {
                    if (video.video_tag !== tag.tag) {
                        return (
                            <C.itemList key={video.id}>
                                <C.itemImg><Link to={`/videos/${video.video_tag}`}><img src={video.thumbnail_url} alt="Video image thumbnail" /></Link></C.itemImg>
                                <C.itemInfo>
                                    <span>{video.video_name}</span><br />
                                    <C.itemStatus><span>{video.author_channel_name}</span></C.itemStatus>
                                    <C.itemStatus><span>{randomNumber()} mil Vizualizações - há {randomNumberData()} anos</span></C.itemStatus>
                                </C.itemInfo>
                            </C.itemList>
                        )
                    }
                })}
                </C.sideVideoList>
            </C.mainGrid>
        </>
        
    )
}