/*---------------------------------------------------------------------

Name:           BZ_addCompNodes.js
Short Desc:     adds composite notes into a scene
Long Desc:      it adds a single composite node for each selected read not in the user's selection
Documentation:  -
Copyright:      Blue Zoo Productions - 2024 
Author:         Chris Carter
Version:        v1.0
Software:       tested in Harmony v22.0.3
Dependencies:   -

Changelog:
    20/08/2024 - Chris Carter - created the script

*///-------------------------------------------------------------------

function BZ_addComp_toReadNodes (){
  // will add composites to the read nodes in the selection
  // input  : user selection of nodes
  // output : additional composites in the scene 
  MessageLog.trace("BZ_addComp_toReadNodes : Started ") 
  scene.beginUndoRedoAccum("BZ_addComp_toReadNodes");
  try
  {
    //---------------this is where i write the relevant code -----

		//get selection of nodes
		var mySelection = selection.selectedNodes() 
		if(mySelection.length <= 0){
			MessageLog.trace("no nodes selected...")
			return
		}
		// validate that the selection contains read nodes

		var myReadNodes = []

		for(var i = 0 ; i < mySelection.length ; i++){
			var selNode = mySelection[i]
			//MessageLog.trace(selNode)
			if(node.type(selNode) == "READ"){
				myReadNodes.push(selNode)
			}
		}

		MessageLog.trace('['+myReadNodes.length + ']"READ" nodes in selection')

		if(myReadNodes.length<=0){
			// just break if there are no read nodes selected
			return
		}

		// list the read nodes ( so the user is aware of what is happening)
		for(j in myReadNodes){

			var myY_offset 				= 100 

			var myReadNode     		= myReadNodes[j]
			var myReadNode_name   = node.getName(myReadNode)
      var myReadNode_parent = node.parentNode(myReadNode)
			var myReadNode_x			= node.coordX(myReadNode)
			var myReadNode_y			= node.coordY(myReadNode)
			

			MessageLog.trace('\t' + j  +  ' - ' + myReadNode_name)
      //MessageLog.trace(myReadNode_parent)

			// give the user an option to proceed or not on adding composites (Yes/No)

			// assuming yes

			// go to each READ node
			/// get its name
			//// build a new name with +"_CMP"
			var myNewComp_path 		= myReadNode_parent
			var myNewComp_name 		= myReadNode_name + "_CMP"
			var myNewComp_fullName = myNewComp_path + "/" +myNewComp_name

			MessageLog.trace('going to build: '+ myNewComp_path)


			//// check if this node already exists, if not add 01 and keep incrementing until you get a unique one
			//// get x position of read node
			//// get y positon of read node

			var myCompNode_x = myReadNode_x
			var myCompNode_y = myReadNode_y + myY_offset
			MessageLog.trace('\t' + myReadNode_x + "  " + myReadNode_y + " -> " + myCompNode_y)

			node.add(myReadNode_parent, myNewComp_name, "COMPOSITE", myCompNode_x, myCompNode_y, 0)

			node.link(myReadNode, 0, myNewComp_fullName, 0, true, true);
 
			////////// add offset to y position 

			// build new composite node
			// link composite node to source read node
		}	






		// tell user it is all completed

    // --------------------------------------------------------------
    MessageLog.trace("BZ_addComp_toReadNodes : Success ") 
  }
  catch(error)
  {
    MessageLog.trace("Error : BZ_addComp_toReadNodes : " + error) 
  }
  finally
  {
    scene.endUndoRedoAccum("BZ_addComp_toReadNodes");
  }
}