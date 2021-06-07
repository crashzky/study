import {css} from '@emotion/css';
import {
    Row,
    Col
} from 'reactstrap';
import {updateRequest} from '../actions/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Search = ({request, updateRequest}) => {
    return (
        <Row className={css`
            width: 512px;
            height: 30px;
            background: #F4F4F4;
            border-radius: 25px;
        `}>
            <Col md='11'>
                <input type='text' className={css`
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    background: transparent;
                `}
                placeholder='Search'
                defaultValue={request}
                onChange={e => updateRequest(e.target.value)}/>
            </Col>
            <Col className={css`
                padding-top: 1px;
            `}>
                <img src='/svg/loupe.svg' alt='Loupe'/>
            </Col>
        </Row>
    );
};

Search.propTypes = {
    updateRequest: PropTypes.func,
    request: PropTypes.string
};

const mapStateToProps = state => ({
    request: state.request
});

export default connect(mapStateToProps, {updateRequest})(Search);