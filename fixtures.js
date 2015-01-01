if (Meteor.isClient) {
  Items = new Meteor.Collection(null);

  var colours = [
    { name: 'Red', typeId: 'sGDMHmNCuRYppSJus' },
    { name: 'Blue', typeId: 'BsL32XAXpPCy9RMai' },
    { name: 'Orange', typeId: 'YauyiZuiAHZkEDRy7' },
    { name: 'Green', typeId: '4H6Mwu63kNHyBuHDJ' },
    { name: 'Yellow', typeId: 'oYPiGwTEHr2rbGxt8' }
  ];

  _.each(colours, function(doc) {
    Items.insert({
      type: 'colour',
      typeId: doc.typeId,
      name: doc.name
    });
  });

  var animals = [
    { name: 'Dog', typeId: 'auEE9AHsbAJja22oc' },
    { name: 'Cat', typeId: '7g499yaJkjGD6Tnyv' },
    { name: 'Horse', typeId: 'LTqXwkbHSkdWjZcYj' },
    { name: 'Giraffe', typeId: 'SzwvAWQcvRhApzXnd' }
  ];

  _.each(animals, function(doc) {
    Items.insert({
      type: 'animal',
      typeId: doc.typeId,
      name: doc.name
    });
  });
}