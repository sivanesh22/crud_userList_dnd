import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Ref } from "semantic-ui-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class DisplayUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      reorderEnabled: true,
      selectedRowIds: [],
      draggingRowId: null
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging && "lightblue",
    ...draggableStyle
  });

  unselectAll = () => {
    this.setState({
      selectedRowIds: []
    });
  };

  onDragEnd = (result) => {
    const { userList } = this.props;
    const { destination, source, reason } = result;
    if (!destination || reason === "CANCEL") {
      this.setState({
        draggingRowId: null
      });
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const tempUserList = Object.assign([], userList);
    const user = userList[source.index];
    tempUserList.splice(source.index, 1);
    tempUserList.splice(destination.index, 0, user);
    // console.log(user, "userList");
    this.props.dispatch({ type: "REORDER_USER", userList: [...tempUserList] });
  };

  removeUser = (id) => {
    this.props.dispatch({ type: "REMOVE_USER", id: id });
  };

  createUser = () => {
    this.props.history.push("/createUser");
  };

  render() {
    const { userList } = this.props;
    return (
      <div style={{ padding: "30px" }}>
        <button onClick={this.createUser}>Create User</button>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Table hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Pincode</th>
                <th>Action</th>
              </tr>
            </thead>
            <Droppable droppableId="table">
              {(provided, snapshot) => (
                <Ref innerRef={provided.innerRef}>
                  <tbody {...provided.droppableProps}>
                    {userList.map((user, idx) => {
                      return (
                        <Draggable
                          draggableId={user.id.toString()}
                          index={idx}
                          key={user.id}
                        >
                          {(provided, snapshot) => (
                            <Ref innerRef={provided.innerRef}>
                              <tr
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={this.getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                                key={user.id}
                                className="user"
                              >
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.city}</td>
                                <td>{user.pincode}</td>
                                <td onClick={() => this.removeUser(user.id)}>
                                  Remove
                                </td>
                              </tr>
                            </Ref>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </tbody>
                </Ref>
              )}
            </Droppable>
          </Table>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userList: state.userListReducer.userList
  };
};

export default connect(mapStateToProps)(DisplayUserList);

// export default DisplayUserList;
