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
  },

  async editStore(req, res) {
    const store = await Store.findOne({ _id: req.params.id });
    res.render('editStore', { title: `Edit ${store.name}`, store });
  },

  async updateStore(req, res) {
    const store = await Store.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidator: true }
    ).exec();
    req.flash(
      'success',
      `Successfully updated <strong>${store.name}</strong>.
      <a href="/stores/${store.slug}">View Store</a>`
    );
    res.redirect(`/stores/${store._id}/edit`);
  }
};

export default StoreController;
