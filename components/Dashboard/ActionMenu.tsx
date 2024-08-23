"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdArrowDropDown, MdMoreHoriz } from "react-icons/md";
import { Box } from "@mui/material";
import { MenuOptions } from "@/src/utils/constants";
import { useTranslations } from "next-intl";

export default function ActionMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const t = useTranslations("MenuActions");

  const handleClick = () => {
    alert(`Vous avez cliqué sur ${MenuOptions[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="end" alignItems="center" p={0}>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        sx={{
          "& .MuiButtonGroup-grouped, .MuiButtonGroup-grouped:hover": {
            backgroundColor: "var(--background-primary)",
          },
          "& .MuiButtonGroup-grouped": {
            borderColor: "transparent",
            borderRight: "1px solid transparent",
            "&:not(:last-of-type)": {
              borderColor: "transparent",
            },
          },
          "& .MuiButtonGroup-grouped:hover": {
            backgroundColor: "var(--background-primary)",
          },
          "& .MuiButtonGroup-grouped:first-of-type": {
            borderRadius: "4px 0 0 4px",
          },
          "& .MuiButtonGroup-grouped:last-of-type": {
            borderRadius: "0 4px 4px 0",
          },
        }}
        aria-label="Button group with a nested menu"
      >
        <Button onClick={handleClick}>{t(MenuOptions[selectedIndex])}</Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <MdArrowDropDown size={22} />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {MenuOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {t(option)}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Button
        variant="outlined"
        sx={{
          borderColor: "transparent",
          color: "var(--text-color)",
          py: 1,
          ml: 1,
          px: "5px",
          backgroundColor: "var(--bg-white)",
          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
        <MdMoreHoriz size={20} />
      </Button>
    </Box>
  );
}
