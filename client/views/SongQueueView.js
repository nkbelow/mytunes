// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);

  },

  render: function() {
    var html = [
      '<div></div>'
    ].join('');

    this.$el.html(html);
    /* Render each model in the collection as a list item (<li>).
     * Remember, we have the underscore functions: */
    this.collection.forEach(this.renderSong, this);

    return this.$el;
  },

  renderSong: function(song) {
    var songView = new SongQueueEntryView({model: song});
    this.$el.append(songView.render());
  }
});
