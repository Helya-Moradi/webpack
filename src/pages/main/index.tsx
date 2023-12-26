import stylesSass from './sass.sass'
import stylesScss from './scss.scss'
import gql from './index.gql'
import img from '../../assets/images/image.jpg'

function MainPage() {
    console.log(gql)

    return <main>

        <p className={stylesSass.paragraphSass}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur impedit ipsa quo ratione rerum
            veritatis vitae! A accusantium ad aliquam amet aperiam aspernatur at autem commodi consequatur dicta dolorem
            doloribus eligendi error ex exercitationem fugiat harum illo, ipsum laborum nihil pariatur perferendis
            quibusdam, repellat reprehenderit soluta sunt suscipit temporibus ullam vero voluptas? Deserunt facilis pariatur
            quis. Asperiores aut cum deleniti dolore dolorum enim esse est ex harum id inventore libero magnam minima non
            obcaecati odio pariatur, perferendis possimus praesentium quaerat quisquam recusandae repellendus ullam unde
            veritatis! Aliquid cupiditate dolorem eligendi modi omnis pariatur quo ratione unde? Ea iste labore
            sint.
        </p>

        <p className={stylesScss.paragraphScss}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur impedit ipsa quo ratione rerum
            veritatis vitae! A accusantium ad aliquam amet aperiam aspernatur at autem commodi consequatur dicta dolorem
            doloribus eligendi error ex exercitationem fugiat harum illo, ipsum laborum nihil pariatur perferendis
            quibusdam, repellat reprehenderit soluta sunt suscipit temporibus ullam vero voluptas? Deserunt facilis pariatur
            quis. Asperiores aut cum deleniti dolore dolorum enim esse est ex harum id inventore libero magnam minima non
            obcaecati odio pariatur, perferendis possimus praesentium quaerat quisquam recusandae repellendus ullam unde
            veritatis! Aliquid cupiditate dolorem eligendi modi omnis pariatur quo ratione unde? Ea iste labore
            sint.
        </p>

        <img src={img} alt=""/>

    </main>;
}

export default MainPage;