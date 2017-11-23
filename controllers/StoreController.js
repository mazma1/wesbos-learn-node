import mongoose from 'mongoose';

const Store = mongoose.model('Store');

const StoreController = {
  homePage(req, res) {
    res.render('index', {
      title: 'Learn Node'
    });
  },

  addStore(req, res) {
    res.render('editStore', { title: 'Add Store' });
  },

  async createStore(req, res) {
    const store = new Store(req.body);
    await store.save();
    res.redirect('/');
  }
};

export default StoreController;
