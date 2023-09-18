const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  graph: (data) => getGraph(data),
  filetree: (data) => getFileTree(data),
  userComputed: (data) => userComputed(data),
  permalink: (data) => {
    return data.page.filePathStem + '.html';
  }
};
