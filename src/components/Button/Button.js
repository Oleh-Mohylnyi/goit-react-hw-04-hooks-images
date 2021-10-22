import './button.css'
import PropTypes from 'prop-types'

export default function Button({ clickBtn }) {
    return(
        <button
            type="button"
            className="Button"
            onClick={clickBtn}>
        Load more
        </button>
    )
}

Button.propTypes = {
    clickBtn: PropTypes.func,
}