<script>
    import logoSmall from '../images/logo-small.png'

    export let expanded = false
</script>

<div id="topnav" class={expanded ? 'expanded' : ''}>
    <ul>
    <li><a class="navlogo" href="/"><img src={logoSmall} alt="small logo" /></a></li>
    <li class="top-link-btn"><a href="https://github.com/aaberg/sql2o/wiki"><span>Documentation</span></a></li>
    <li class="top-link-btn"><a href="http://api.sql2o.org/"><span>Javadoc</span></a></li>
    <li class="top-link-btn"><a href="http://groups.google.com/group/sql2o"><span>Google group</span></a></li>
    <li class="top-link-btn"><a href="https://github.com/aaberg/sql2o"><span>Github page</span></a></li>
    <li class="icon">
        <button on:click={() => expanded = !expanded}>&#9776;</button>
    </li>
    </ul>
</div>

<style>
    #topnav {
  padding: 0;
  margin: 0;
  /*height:54px;*/
  width:100%;
  background: linear-gradient(to bottom, rgba(80,80,80,1) 0%, rgba(60,60,60,1) 100%);
  box-shadow: 0 0 10px rgba(40,40,40,0.8);
  position: fixed;
  top:0;
  z-index: 1;
}

#topnav ul {
    margin:0;
    padding:0;
}

#topnav ul li {
  list-style: none;
  display: inline-block;
  padding:0;
  margin:0;
}

#topnav a, #topnav button {
  text-decoration: none;
  vertical-align: top;
  display: inline-block;
  outline: 0;
  font-size: 13pt;
  border: 0;
}

#topnav li.icon {
    display: none;
}

#topnav a.navlogo {font-size: 0;}
.navlogo img {
    height: 54px;
}

#topnav li a, #topnav li button {
  color:white;
    
}
#topnav li.top-link-btn a {
  padding:13px 15px;
  display: inline-block;
}

#topnav li {
  
  
  /*color: rgba(170,170,180,1);/*
  /*transition: color .2s ease-in-out;*/
  transition: background .2s ease-in-out;
}

#topnav li:hover{
  color: rgba(255,255,255,1);
  background: rgba(100,100,100,0.8)
}

/* When the screen is less than 680 pixels wide, hide all list items, except for the first one ("Home"). Show the list item that contains the link to open and close the topnav (li.icon) */
@media screen and (max-width:720px) {
  
  #topnav ul {
    height:54px;
    transition: height .4s ease-in-out;
    overflow: hidden;
  }

  #topnav ul li.top-link-btn {
    display: block;
    text-align: center;
  }
  #topnav ul li.icon {
    /*float: right;
    display: inline-block;*/
    display: block;
    position: absolute;
    top:0;
    right:0;
  }
  #topnav ul li.icon a {
      font-size: 34px;
      padding: 0 15px;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens */
@media screen and (max-width:720px) {
  #topnav.expanded ul {
    height: 266px; 
  }
  
  #topnav.expanded ul li {
    display: block;
  }
  #topnav.expanded ul li a {
      display: block;
  }
}


</style>