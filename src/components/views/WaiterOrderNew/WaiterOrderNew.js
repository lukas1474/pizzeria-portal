import React from 'react';
import styles from './WaiterOrderNew.module.scss';

import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const WaiterOrderNew = () => {
  const [state, setState] = React.useState({
    latte: true,
    cappuccino: false,
    espresso: false,
    macchiato: false,

    sauceTomato: true,
    sauceSourCream: false,

    toppingsOlives: true,
    toppingsRedPeppers: true,
    toppingsGreenPeppers: true,
    toppingsMuschrooms: true,
    toppingsFreshBasil: true,
    toppingsSalami: false,

    crustStandard: true,
    crustThin: false,
    crustThick: false,
    crustCheeseInEdges: false,
    crustWholewheat: false,
    crustWithExtraGluten: false,

    saladIngCucumber: true,
    saladIngTomatoes: true,
    saladIngOlives: true,
    saladIngFetaCheese: false,
    saladIngCheese: false,
    saladIngFreshHerbs: true,
    saladIngBlackPepper: false,

    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    latte,
    cappuccino,
    espresso,
    macchiato,

    sauceTomato,
    sauceSourCream,

    toppingsOlives,
    toppingsRedPeppers,
    toppingsGreenPeppers,
    toppingsMuschrooms,
    toppingsFreshBasil,
    toppingsSalami,

    crustStandard,
    crustThin,
    crustThick,
    crustCheeseInEdges,
    crustWholewheat,
    crustWithExtraGluten,

    saladIngCucumber,
    saladIngTomatoes,
    saladIngOlives,
    saladIngFetaCheese,
    saladIngCheese,
    saladIngFreshHerbs,
    saladIngBlackPepper,
  } = state;

  return (
    <main>
      <Paper>
        <Container className={styles.container}>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="Table">
              <TreeItem nodeId="2" label="1" />
              <TreeItem nodeId="3" label="2" />
              <TreeItem nodeId="4" label="3" />
            </TreeItem>
          </TreeView>
        </Container>
        <Container className={styles.paper}>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
          >
            <TreeItem nodeId="1" label="Doughnut 9$" />
            <TreeItem nodeId="2" label="Breakfast">
              <TreeItem nodeId="3" label="Sandwich 10$" />
              <TreeItem nodeId="4" label="Coffee">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={latte} onChange={handleChange} name="latte" />}
                    label="Latte 1$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={cappuccino} onChange={handleChange} name="cappuccino" />}
                    label="Cappuccino 1$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={espresso} onChange={handleChange} name="espresso" />}
                    label="Espresso 1$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={macchiato} onChange={handleChange} name="macchiato" />}
                    label="Macchiato 1$"
                  />
                </FormGroup>
              </TreeItem>
              <FormControlLabel
                onChange={handleChange}
                value="start"
                control={<Checkbox color="primary" />}
                label="sample option"
                labelPlacement="start"
              />
            </TreeItem>
            <TreeItem nodeId="9" label="Pizza 20$">
              <TreeItem nodeId="10" label="Sauce">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={sauceTomato} onChange={handleChange} name="sauceTomato" />}
                    label="Tomato 0$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={sauceSourCream} onChange={handleChange} name="sauceSourCream" />}
                    label="Sour cream 2$"
                  />
                </FormGroup>
              </TreeItem>
              <TreeItem nodeId="14" label="Toppings">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={toppingsOlives} onChange={handleChange} name="toppingsOlives" />}
                    label="Olives 2$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={toppingsRedPeppers} onChange={handleChange} name="toppingsRedPeppers" />}
                    label="Red peppers 2$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={toppingsGreenPeppers} onChange={handleChange} name="toppingsGreenPeppers" />}
                    label="Green peppers 2$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={toppingsMuschrooms} onChange={handleChange} name="toppingsMuschrooms" />}
                    label="Muschrooms 2$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={toppingsFreshBasil} onChange={handleChange} name="toppingsFreshBasil" />}
                    label="Fresh basil 2$"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={toppingsSalami} onChange={handleChange} name="toppingsSalami" />}
                    label="Salami 3$"
                  />
                </FormGroup>
              </TreeItem>
              <TreeItem nodeId="21" label="Pizza crust">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={crustStandard} onChange={handleChange} name="crustStandard" />}
                      label="Standard 0$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={crustThin} onChange={handleChange} name="crustThin" />}
                      label="Thin 2$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={crustThick} onChange={handleChange} name="crustThick" />}
                      label="Thick 2$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={crustCheeseInEdges} onChange={handleChange} name="crustCheeseInEdges" />}
                      label="Cheese in edges 5$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={crustWholewheat} onChange={handleChange} name="crustWholewheat" />}
                      label="Wholewheat 3$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={crustWithExtraGluten} onChange={handleChange} name="crustWithExtraGluten" />}
                      label="With extra gluten 0$"
                    />
                  </FormGroup>
                </FormControl>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId="28" label="Salad 9$">
              <TreeItem nodeId="29" label="Ingredients">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={saladIngCucumber} onChange={handleChange} name="saladIngCucumber" />}
                      label="Cucumber 1$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={saladIngTomatoes} onChange={handleChange} name="saladIngTomatoes" />}
                      label="Tomatoes 1$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={saladIngOlives} onChange={handleChange} name="saladIngOlives" />}
                      label="Olives 1$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={saladIngFetaCheese} onChange={handleChange} name="saladIngFetaCheese" />}
                      label="Feta Cheese 1$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={saladIngCheese} onChange={handleChange} name="saladIngCheese" />}
                      label="Cheese 1$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={saladIngFreshHerbs} onChange={handleChange} name="saladIngFreshHerbs" />}
                      label="Fresh herbs 1$"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={saladIngBlackPepper} onChange={handleChange} name="saladIngBlackPepper" />}
                      label="Black Pepper 1$"
                    />
                  </FormGroup>
                </FormControl>
              </TreeItem>
            </TreeItem>
          </TreeView>
        </Container>
        <Container className={styles.container}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Table 1</FormLabel>
            <FormGroup aria-label="position" row>
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                multiSelect
              >
                <TreeItem nodeId="1" label="Pizza 20$">
                  <FormControlLabel
                    onChange={handleChange}
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="sample option"
                    labelPlacement="start"
                  />
                </TreeItem>
                <TreeItem nodeId="2" label="Breakfast 11$">
                  <FormControlLabel
                    onChange={handleChange}
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="sample option"
                    labelPlacement="start"
                  />
                </TreeItem>
              </TreeView>
            </FormGroup>
            <h2>Total: 31$</h2>
          </FormControl>
        </Container>
        <Container className={styles.container}>
          <Button variant="contained" color="secondary">
            Confirm order
          </Button>
        </Container>
      </Paper>
    </main>
  );
};

export default WaiterOrderNew;
