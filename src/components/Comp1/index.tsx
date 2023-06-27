// import './comp1.scss'
import { Button } from 'antd';
import { StepForwardOutlined } from "@ant-design/icons"
// 模块化引入
import styles from './comp1.module.scss'

const Comp1 = () => {
    return (
        <div className={styles.box}>
            <p>test msg in Comp1</p>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <StepForwardOutlined style={{ fontSize: '16px', color: '#08c' }} />
        </div>
    )
}

export default Comp1