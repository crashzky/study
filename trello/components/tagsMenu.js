import {css} from '@emotion/css';
import {connect} from 'react-redux';
import ColorTag from '../components/colorTag';
import PropTypes from 'prop-types';
import {setActiveTags, setActive, setActiveNull} from '../actions/action';

const TagsMenu = ({column, card, columns, setActiveTags, setActive, setActiveNull}) => {
    const tags = columns[column].childrens[card].tags;

    const checkActive = color => tags.includes(color);
    function toggle(color) {
        let _tags = tags;
        if(_tags.includes(color)) {
            const i = _tags.indexOf(color);
            _tags.splice(i, 1);
        } else {
            _tags.push(color);
        }

        setActiveTags(column, card, _tags);
        setActiveNull();
        setActive(column, card);
    }

    return (
        <div className={css`
            width: 251px;
            height: 99px;
            background: white;
            border-radius: 3px;
        `}>
            <p className={css`
                font-weight: 400;
                font-size: 18px;
                line-height: 27px;
                color: #70778F;
                text-align: center;
                margin: 6px 0;
            `}>Tags</p>
            <div className={css`
                border: 1px solid #DFE2E7;
                width: 224px;
                margin: 0 auto;
            `}/>
            <div className={css`
                margin: 12px 15px;
                display: flex;
                gap: 10px;
            `}>
                <ColorTag color='#F8BD1C' active={checkActive('yellow')} onClick={() => toggle('yellow')}/>
                <ColorTag color='#4339F2' active={checkActive('blue')} onClick={() => toggle('blue')}/>
                <ColorTag color='#FF3838' active={checkActive('red')} onClick={() => toggle('red')}/>
                <ColorTag color='#891BE8' active={checkActive('purple')} onClick={() => toggle('purple')}/>
                <ColorTag color='#1AD698' active={checkActive('green')} onClick={() => toggle('green')}/>
            </div>
        </div>
    );
};

TagsMenu.propTypes = {
    column: PropTypes.number,
    card: PropTypes.number,
    columns: PropTypes.arrayOf(PropTypes.object),
    setActiveTags: PropTypes.func,
    setActive: PropTypes.func,
    setActiveNull: PropTypes.func
};

const mapStateToProps = state => ({
    columns: state.columns
});

export default connect(mapStateToProps, {setActiveTags, setActive, setActiveNull})(TagsMenu);