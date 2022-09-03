import { Menu } from "antd";
import Link from "next/link";

const {Item}=Menu; //MENU.ITEM

const Topnav = () => {
  return (
    <div>
        <Menu mode="horizontal">
            <Item >
                <Link href="/">
                    <a className=""> APP</a>
                </Link>
            </Item>
            <Item >
                <Link href="/login">
                    <a className=""> Login</a>
                </Link>
            </Item>
            <Item >
                <Link href="/register">
                    <a className=""> Register</a>
                </Link>
            </Item>
        </Menu>
    </div>
  )
}

export default Topnav