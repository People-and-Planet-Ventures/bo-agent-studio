import logo from '@/assets/images/bo-white.png'
import logoDark from '@/assets/images/bo-dark.png'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 75 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Flowise'
            />
        </div>
    )
}

export default Logo
