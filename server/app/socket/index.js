
module.exports = function(socket) {

  /* socket.on('user:join', () => {
    console.log('one user is online');
    socket.broadcast.emit('fetchOnlineUsers', {});
  });

  socket.on('user:isDisconnected', () => {
    console.log('one user is disconnected');
    socket.emit('user:logout', {});
    socket.broadcast.emit('fetchOnlineUsers', {});
  });
 */
  socket.on('msg:post', () => {
    console.log('new message added on FireStore DB');
    socket.broadcast.emit('msg:getNew', {});
  });
    
};
