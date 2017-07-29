import { connect } from 'react-redux';
import component from './usuarios-page.component';
import { loadUsuarios } from '../../../../services/actions/usuario.actions';

const mapStateToProps = (state, props) => {

    return {
        usuarios: state.app.usuario.items,
        loading: state.app.usuario.loading,
    };

};


const mapDispatchToProps = (dispatch, props) => ({

    init() {
        dispatch(loadUsuarios());
    }

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);