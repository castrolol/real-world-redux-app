import { connect } from 'react-redux';
import component from './usuarios-page.component';
import { loadUsuarios } from '../../../../services/actions/usuario.actions';

const mapStateToProps = (state, props) => {

    return {
        usuarios: state.app.usuario.items,
        page: state.app.usuario.page,
        pageCount: state.app.usuario.pageCount,
        loading: state.app.usuario.loading,
    };

};


const mapDispatchToProps = (dispatch, props) => ({

    init() {
        dispatch(loadUsuarios());
    },

    changePage(page) {
        dispatch(loadUsuarios(page));
    }

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);