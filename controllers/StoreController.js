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
    const store = await (new Store(req.body)).save();
    req.flash('success', `Successfully created ${store.name}. Care to leave a reveiw?`);
    res.redirect(`/store/${store.slug}`);
  },

  async getStores(req, res) {
    const stores = await Store.find();
    res.render('stores', { title: 'Stores', stores });
  }
};

export default StoreController;
